import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import NoclegiSuprasl from "./pages/NoclegiSuprasl.tsx";
import DomWLesieSuprasl from "./pages/DomWLesieSuprasl.tsx";
import WeekendSuprasl from "./pages/WeekendSuprasl.tsx";
import AtrakcjeSuprasl from "./pages/AtrakcjeSuprasl.tsx";
import PuszczaKnyszynskaNocleg from "./pages/PuszczaKnyszynskaNocleg.tsx";
import Informator from "./pages/Informator.tsx";
import DomekSuprasl from "./pages/DomekSuprasl.tsx";
import DomekZJacuzziPodlasie from "./pages/DomekZJacuzziPodlasie.tsx";
import WieczorPanienskiSuprasl from "./pages/WieczorPanienskiSuprasl.tsx";
import Blog from "./pages/Blog.tsx";
import SupraskiSystemWodny from "./pages/blog/SupraskiSystemWodny.tsx";
import SzlakPowstaniaStyczniowego from "./pages/blog/SzlakPowstaniaStyczniowego.tsx";
import SupraslAtrakcje from "./pages/blog/SupraslAtrakcje.tsx";
import SzlakiPieszeRowerowe from "./pages/blog/SzlakiPieszeRowerowe.tsx";
import SzlakBioroznorodnosci from "./pages/blog/SzlakBioroznorodnosci.tsx";
import KruszynianyTatarskaWies from "./pages/blog/KruszynianyTatarskaWies.tsx";
import SupraslAtrakcjeUzdrowisko from "./pages/blog/SupraslAtrakcjeUzdrowisko.tsx";
import KajakiSuprasl from "./pages/blog/KajakiSuprasl.tsx";
import RestauracjeSuprasl from "./pages/blog/RestauracjeSuprasl.tsx";
import CoRobicSuprasl from "./pages/blog/CoRobicSuprasl.tsx";
import WeekendSupraslPlan from "./pages/blog/WeekendSupraslPlan.tsx";
import NajlepszeMiejscaPuszcza from "./pages/blog/NajlepszeMiejscaPuszcza.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
