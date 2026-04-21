import fs from 'node:fs';

const ROUTE_DEFINITIONS_FILE = 'src/routes/routeDefinitions.ts';

export const NON_INDEXABLE_ROUTES = new Set(['/admin', '/admin/login', '/platnosc-sukces']);

function normalizeRoute(route) {
  if (!route || route === '*') return route;
  return route.endsWith('/') && route !== '/' ? route.slice(0, -1) : route;
}

export function getRouteManifest() {
  const content = fs.readFileSync(ROUTE_DEFINITIONS_FILE, 'utf8');
  const routePattern = /\{\s*path:\s*'([^']+)'([\s\S]*?)\}/g;
  const routes = [];

  for (const match of content.matchAll(routePattern)) {
    const path = normalizeRoute(match[1]);
    const definitionBody = match[2];
    const prerender = !/prerender:\s*false/.test(definitionBody);

    routes.push({
      path,
      prerender,
      indexable: path !== '*' && prerender && !NON_INDEXABLE_ROUTES.has(path),
    });
  }

  return {
    routes,
    indexableRoutes: routes.filter((route) => route.indexable).map((route) => route.path),
    prerenderRoutes: routes.filter((route) => route.prerender && route.path !== '*').map((route) => route.path),
  };
}
