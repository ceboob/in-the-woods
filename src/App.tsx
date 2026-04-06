import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

// Lazy-loaded routes for code splitting
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const NoclegiSuprasl = lazy(() => import("./pages/NoclegiSuprasl.tsx"));
const DomWLesieSuprasl = lazy(() => import("./pages/DomWLesieSuprasl.tsx"));
const WeekendSuprasl = lazy(() => import("./pages/WeekendSuprasl.tsx"));
const AtrakcjeSuprasl = lazy(() => import("./pages/AtrakcjeSuprasl.tsx"));
const PuszczaKnyszynskaNocleg = lazy(() => import("./pages/PuszczaKnyszynskaNocleg.tsx"));
const Informator = lazy(() => import("./pages/Informator.tsx"));
const DomekSuprasl = lazy(() => import("./pages/DomekSuprasl.tsx"));
const DomekZJacuzziPodlasie = lazy(() => import("./pages/DomekZJacuzziPodlasie.tsx"));
const WieczorPanienskiSuprasl = lazy(() => import("./pages/WieczorPanienskiSuprasl.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const SupraskiSystemWodny = lazy(() => import("./pages/blog/SupraskiSystemWodny.tsx"));
const SzlakPowstaniaStyczniowego = lazy(() => import("./pages/blog/SzlakPowstaniaStyczniowego.tsx"));
const SupraslAtrakcje = lazy(() => import("./pages/blog/SupraslAtrakcje.tsx"));
const SzlakiPieszeRowerowe = lazy(() => import("./pages/blog/SzlakiPieszeRowerowe.tsx"));
const SzlakBioroznorodnosci = lazy(() => import("./pages/blog/SzlakBioroznorodnosci.tsx"));
const KruszynianyTatarskaWies = lazy(() => import("./pages/blog/KruszynianyTatarskaWies.tsx"));
const SupraslAtrakcjeUzdrowisko = lazy(() => import("./pages/blog/SupraslAtrakcjeUzdrowisko.tsx"));
const KajakiSuprasl = lazy(() => import("./pages/blog/KajakiSuprasl.tsx"));
const RestauracjeSuprasl = lazy(() => import("./pages/blog/RestauracjeSuprasl.tsx"));
const CoRobicSuprasl = lazy(() => import("./pages/blog/CoRobicSuprasl.tsx"));
const WeekendSupraslPlan = lazy(() => import("./pages/blog/WeekendSupraslPlan.tsx"));
const NajlepszeMiejscaPuszcza = lazy(() => import("./pages/blog/NajlepszeMiejscaPuszcza.tsx"));
const PuszczaKnyszynskaHistorie = lazy(() => import("./pages/blog/PuszczaKnyszynskaHistorie.tsx"));
const WydarzeniaSupra2026 = lazy(() => import("./pages/blog/WydarzeniaSupra2026.tsx"));
const PlatnoscSukces = lazy(() => import("./pages/PlatnoscSukces.tsx"));
const AdminLogin = lazy(() => import("./pages/AdminLogin.tsx"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard.tsx"));

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
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/noclegi-suprasl" element={<NoclegiSuprasl />} />
              <Route path="/dom-w-lesie-suprasl" element={<DomWLesieSuprasl />} />
              <Route path="/weekend-suprasl" element={<WeekendSuprasl />} />
              <Route path="/atrakcje-suprasl" element={<AtrakcjeSuprasl />} />
              <Route path="/puszcza-knyszynska-nocleg" element={<PuszczaKnyszynskaNocleg />} />
              <Route path="/informator" element={<Informator />} />
              <Route path="/domek-suprasl" element={<DomekSuprasl />} />
              <Route path="/domek-z-jacuzzi-podlasie" element={<DomekZJacuzziPodlasie />} />
              <Route path="/wieczor-panienski-suprasl" element={<WieczorPanienskiSuprasl />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/supraski-system-wodny" element={<SupraskiSystemWodny />} />
              <Route path="/blog/szlak-powstania-styczniowego-suprasl" element={<SzlakPowstaniaStyczniowego />} />
              <Route path="/blog/suprasl-atrakcje-national-geographic" element={<SupraslAtrakcje />} />
              <Route path="/blog/szlaki-piesze-rowerowe-suprasl" element={<SzlakiPieszeRowerowe />} />
              <Route path="/blog/szlak-bioroznorodnosci-suprasl" element={<SzlakBioroznorodnosci />} />
              <Route path="/blog/kruszyniany-tatarska-wies" element={<KruszynianyTatarskaWies />} />
              <Route path="/blog/suprasl-atrakcje-uzdrowisko" element={<SupraslAtrakcjeUzdrowisko />} />
              <Route path="/blog/kajaki-suprasl" element={<KajakiSuprasl />} />
              <Route path="/blog/restauracje-suprasl" element={<RestauracjeSuprasl />} />
              <Route path="/blog/co-robic-suprasl" element={<CoRobicSuprasl />} />
              <Route path="/blog/weekend-suprasl-plan" element={<WeekendSupraslPlan />} />
              <Route path="/blog/najlepsze-miejsca-puszcza-knyszynska" element={<NajlepszeMiejscaPuszcza />} />
              <Route path="/blog/puszcza-knyszynska-historie" element={<PuszczaKnyszynskaHistorie />} />
              <Route path="/blog/wydarzenia-suprasl-2026" element={<WydarzeniaSupra2026 />} />
              <Route path="/platnosc-sukces" element={<PlatnoscSukces />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
