import type { ComponentType } from 'react';

type RouteModule = {
  default: ComponentType;
};

export type RouteDefinition = {
  path: string;
  load: () => Promise<RouteModule>;
  prerender?: boolean;
};

export const routeDefinitions: RouteDefinition[] = [
  { path: '/', load: () => import('@/pages/Index.tsx') },
  { path: '/noclegi-suprasl', load: () => import('@/pages/NoclegiSuprasl.tsx') },
  { path: '/dom-w-lesie-suprasl', load: () => import('@/pages/DomWLesieSuprasl.tsx') },
  { path: '/weekend-suprasl', load: () => import('@/pages/WeekendSuprasl.tsx') },
  { path: '/atrakcje-suprasl', load: () => import('@/pages/AtrakcjeSuprasl.tsx') },
  { path: '/puszcza-knyszynska-nocleg', load: () => import('@/pages/PuszczaKnyszynskaNocleg.tsx') },
  { path: '/informator', load: () => import('@/pages/Informator.tsx') },
  { path: '/domek-suprasl', load: () => import('@/pages/DomekSuprasl.tsx') },
  { path: '/domek-z-jacuzzi-podlasie', load: () => import('@/pages/DomekZJacuzziPodlasie.tsx') },
  { path: '/wieczor-panienski-suprasl', load: () => import('@/pages/WieczorPanienskiSuprasl.tsx') },
  { path: '/blog', load: () => import('@/pages/Blog.tsx') },
  { path: '/blog/supraski-system-wodny', load: () => import('@/pages/blog/SupraskiSystemWodny.tsx') },
  {
    path: '/blog/szlak-powstania-styczniowego-suprasl',
    load: () => import('@/pages/blog/SzlakPowstaniaStyczniowego.tsx'),
  },
  {
    path: '/blog/suprasl-atrakcje-national-geographic',
    load: () => import('@/pages/blog/SupraslAtrakcje.tsx'),
  },
  {
    path: '/blog/szlaki-piesze-rowerowe-suprasl',
    load: () => import('@/pages/blog/SzlakiPieszeRowerowe.tsx'),
  },
  {
    path: '/blog/szlak-bioroznorodnosci-suprasl',
    load: () => import('@/pages/blog/SzlakBioroznorodnosci.tsx'),
  },
  {
    path: '/blog/kruszyniany-tatarska-wies',
    load: () => import('@/pages/blog/KruszynianyTatarskaWies.tsx'),
  },
  {
    path: '/blog/suprasl-atrakcje-uzdrowisko',
    load: () => import('@/pages/blog/SupraslAtrakcjeUzdrowisko.tsx'),
  },
  { path: '/blog/kajaki-suprasl', load: () => import('@/pages/blog/KajakiSuprasl.tsx') },
  { path: '/blog/restauracje-suprasl', load: () => import('@/pages/blog/RestauracjeSuprasl.tsx') },
  { path: '/blog/co-robic-suprasl', load: () => import('@/pages/blog/CoRobicSuprasl.tsx') },
  { path: '/blog/weekend-suprasl-plan', load: () => import('@/pages/blog/WeekendSupraslPlan.tsx') },
  {
    path: '/blog/najlepsze-miejsca-puszcza-knyszynska',
    load: () => import('@/pages/blog/NajlepszeMiejscaPuszcza.tsx'),
  },
  {
    path: '/blog/puszcza-knyszynska-historie',
    load: () => import('@/pages/blog/PuszczaKnyszynskaHistorie.tsx'),
  },
  { path: '/blog/wydarzenia-suprasl-2026', load: () => import('@/pages/blog/WydarzeniaSupra2026.tsx') },
  { path: '/blog/aktywny-wypoczynek-suprasl', load: () => import('@/pages/blog/AktywnyWypoczynek.tsx') },
  { path: '/blog/uzdrowisko-spa-suprasl', load: () => import('@/pages/blog/UzdrowiSkoSPA.tsx') },
  {
    path: '/blog/przewodnik-kulinarny-suprasl',
    load: () => import('@/pages/blog/PrzewodnikKulinarny.tsx'),
  },
  { path: '/blog/szlaki-puszcza-knyszynska', load: () => import('@/pages/blog/SzlakiPuszczaKnyszynska.tsx') },
  { path: '/blog/suprasl-na-weekend', load: () => import('@/pages/blog/SupraslNaWeekend.tsx') },
  { path: '/blog/suprasl-z-dziecmi', load: () => import('@/pages/blog/SupraslZDziecmi.tsx') },
  {
    path: '/blog/romantyczny-weekend-podlasie',
    load: () => import('@/pages/blog/RomantycznyWeekendPodlasie.tsx'),
  },
  { path: '/blog/cyfrowy-detoks-las', load: () => import('@/pages/blog/CyfrowyDetoksLas.tsx') },
  {
    path: '/blog/grzybobranie-puszcza-knyszynska',
    load: () => import('@/pages/blog/GrzybobraniePuszczaKnyszynska.tsx'),
  },
  { path: '/blog/workation-podlasie', load: () => import('@/pages/blog/WorkationPodlasie.tsx') },
  { path: '/blog/podlasie-z-psem', load: () => import('@/pages/blog/PodlasieZPsem.tsx') },
  {
    path: '/blog/kraina-otwartych-okiennic',
    load: () => import('@/pages/blog/KrainaOtwartychOkiennic.tsx'),
  },
  {
    path: '/blog/puszcza-knyszynska-przewodnik',
    load: () => import('@/pages/blog/PuszczaKnyszynskaPrzewodnik.tsx'),
  },
  { path: '/dom', load: () => import('@/pages/Dom.tsx') },
  { path: '/galeria', load: () => import('@/pages/Galeria.tsx') },
  { path: '/dokumenty', load: () => import('@/pages/Dokumenty.tsx') },
  { path: '/platnosc-sukces', load: () => import('@/pages/PlatnoscSukces.tsx') },
  { path: '/polityka-prywatnosci', load: () => import('@/pages/PolitykaPrywatnosci.tsx') },
  { path: '/admin/login', load: () => import('@/pages/AdminLogin.tsx'), prerender: false },
  { path: '/admin', load: () => import('@/pages/AdminDashboard.tsx'), prerender: false },
  { path: '*', load: () => import('@/pages/NotFound.tsx'), prerender: false },
];

export const prerenderRoutes = routeDefinitions
  .filter((route) => route.prerender !== false && route.path !== '*')
  .map((route) => route.path);
