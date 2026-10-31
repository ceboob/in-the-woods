import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { TooltipProvider } from '@/components/ui/tooltip';
import CookieConsent from './components/CookieConsent';
import GTMTracker from './components/GTMTracker';
import ClientRoutes from './routes/ClientRoutes';

const Sonner = lazy(() => import('@/components/ui/sonner').then((m) => ({ default: m.Toaster })));
const Toaster = lazy(() => import('@/components/ui/toaster').then((m) => ({ default: m.Toaster })));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-forest border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Suspense fallback={null}>
          <Toaster />
          <Sonner />
        </Suspense>
        <BrowserRouter>
          <GTMTracker />
          <Suspense fallback={<PageLoader />}>
            <ClientRoutes />
            <CookieConsent />
          </Suspense>
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
