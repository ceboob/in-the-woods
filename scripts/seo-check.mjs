import fs from 'node:fs';
import { NON_INDEXABLE_ROUTES, getRouteManifest } from './lib/route-manifest.mjs';

const SITEMAP_FILE = 'public/sitemap.xml';
const ROBOTS_FILE = 'public/robots.txt';

const NOINDEX_EXPECTATIONS = [
  { file: 'src/pages/AdminLogin.tsx', marker: 'canonical="https://www.suprasl.online/admin/login"' },
  { file: 'src/pages/AdminDashboard.tsx', marker: 'canonical="https://www.suprasl.online/admin"' },
  { file: 'src/pages/PlatnoscSukces.tsx', marker: 'canonical="https://www.suprasl.online/platnosc-sukces"' },
  { file: 'src/pages/NotFound.tsx', marker: 'title="404 – Strona nie istnieje"' },
];

const { routes, indexableRoutes } = getRouteManifest();
const allRoutes = routes.filter((route) => route.path !== '*').map((route) => route.path);

const sitemapContent = fs.readFileSync(SITEMAP_FILE, 'utf8');
const sitemapLocs = [
  ...sitemapContent.matchAll(/<loc>https:\/\/www\.suprasl\.online([^<]*)<\/loc>/g),
].map((m) => {
  const route = m[1] ? `/${m[1].replace(/^\/+/, '')}` : '/';
  return route.endsWith('/') && route !== '/' ? route.slice(0, -1) : route;
});

const sitemapRoutes = new Set(sitemapLocs);

const missingInSitemap = indexableRoutes.filter((route) => !sitemapRoutes.has(route));
const unexpectedInSitemap = [...sitemapRoutes].filter(
  (route) => !allRoutes.includes(route) && route !== '/',
);
const nonIndexableInSitemap = [...sitemapRoutes].filter((route) =>
  NON_INDEXABLE_ROUTES.has(route),
);

const noindexIssues = [];
for (const expectation of NOINDEX_EXPECTATIONS) {
  const content = fs.readFileSync(expectation.file, 'utf8');
  const hasNoindex = content.includes('noindex');
  const hasMarker = content.includes(expectation.marker);
  if (!hasNoindex || !hasMarker) {
    noindexIssues.push(expectation.file);
  }
}

const robotsContent = fs.readFileSync(ROBOTS_FILE, 'utf8');
const disallowedRoutes = new Set(
  [...robotsContent.matchAll(/^Disallow: (\S+)$/gm)].map((match) => match[1]),
);
const missingRobotsRules = [...NON_INDEXABLE_ROUTES].filter(
  (route) => !disallowedRoutes.has(route),
);
const blockedIndexableRoutes = indexableRoutes.filter((route) => disallowedRoutes.has(route));

if (
  missingInSitemap.length ||
  unexpectedInSitemap.length ||
  nonIndexableInSitemap.length ||
  noindexIssues.length ||
  missingRobotsRules.length ||
  blockedIndexableRoutes.length
) {
  console.error('SEO check failed.');
  if (missingInSitemap.length) {
    console.error('Missing routes in sitemap:', missingInSitemap);
  }
  if (unexpectedInSitemap.length) {
    console.error('Unexpected routes in sitemap:', unexpectedInSitemap);
  }
  if (nonIndexableInSitemap.length) {
    console.error('Non-indexable routes in sitemap:', nonIndexableInSitemap);
  }
  if (noindexIssues.length) {
    console.error('Missing noindex markers:', noindexIssues);
  }
  if (missingRobotsRules.length) {
    console.error('Missing robots.txt disallow rules:', missingRobotsRules);
  }
  if (blockedIndexableRoutes.length) {
    console.error('Indexable routes blocked by robots.txt:', blockedIndexableRoutes);
  }
  process.exit(1);
}

console.log('SEO check passed.');
console.log('Indexable routes:', indexableRoutes.length);
console.log('Sitemap routes:', sitemapRoutes.size);
