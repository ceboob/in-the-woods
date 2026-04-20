import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import type { FilledContext } from 'react-helmet-async';
import { Toaster as Sonner } from '@/components/ui/sonner';
import CookieConsent from '@/components/CookieConsent';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { prerenderRoutes, routeDefinitions } from '@/routes/routeDefinitions';

type HelmetContext = {
  helmet?: FilledContext['helmet'];
};

export { prerenderRoutes };

export async function render(url: string) {
  const queryClient = new QueryClient();
  const helmetContext: HelmetContext = {};
  const loadedRoutes = await Promise.all(
    routeDefinitions.map(async (route) => ({
      path: route.path,
      Component: (await route.load()).default,
    })),
  );

  const appHtml = renderToString(
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <StaticRouter location={url}>
            <Routes>
              {loadedRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
            <CookieConsent />
          </StaticRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>,
  );

  const helmet = helmetContext.helmet;

  return {
    appHtml,
    headTags: [
      helmet?.title.toString() ?? '',
      helmet?.priority?.toString() ?? '',
      helmet?.meta.toString() ?? '',
      helmet?.link.toString() ?? '',
      helmet?.script.toString() ?? '',
    ]
      .filter(Boolean)
      .join('\n'),
    htmlAttributes: helmet?.htmlAttributes.toString() ?? '',
    bodyAttributes: helmet?.bodyAttributes.toString() ?? '',
  };
}
