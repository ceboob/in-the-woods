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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
