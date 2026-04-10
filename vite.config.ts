import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import vitePrerender from "vite-plugin-prerender";

const prerenderRoutes = [
  "/",
  "/dom",
  "/galeria",
  "/blog",
  "/informator",
  "/dokumenty",
  "/noclegi-suprasl",
  "/domek-suprasl",
  "/domek-z-jacuzzi-podlasie",
  "/dom-w-lesie-suprasl",
  "/weekend-suprasl",
  "/wieczor-panienski-suprasl",
  "/atrakcje-suprasl",
  "/puszcza-knyszynska-nocleg",
  "/polityka-prywatnosci",
  "/platnosc-sukces",
  "/blog/supraski-system-wodny",
  "/blog/szlak-powstania-styczniowego-suprasl",
  "/blog/suprasl-atrakcje-national-geographic",
  "/blog/szlaki-piesze-rowerowe-suprasl",
  "/blog/szlak-bioroznorodnosci-suprasl",
  "/blog/kruszyniany-tatarska-wies",
  "/blog/suprasl-atrakcje-uzdrowisko",
  "/blog/kajaki-suprasl",
  "/blog/restauracje-suprasl",
  "/blog/co-robic-suprasl",
  "/blog/weekend-suprasl-plan",
  "/blog/najlepsze-miejsca-puszcza-knyszynska",
  "/blog/puszcza-knyszynska-historie",
  "/blog/wydarzenia-suprasl-2026",
  "/blog/aktywny-wypoczynek-suprasl",
  "/blog/uzdrowisko-spa-suprasl",
  "/blog/przewodnik-kulinarny-suprasl",
  "/blog/szlaki-puszcza-knyszynska",
  "/blog/suprasl-na-weekend",
  "/blog/suprasl-z-dziecmi",
  "/blog/romantyczny-weekend-podlasie",
  "/blog/cyfrowy-detoks-las",
  "/blog/grzybobranie-puszcza-knyszynska",
  "/blog/workation-podlasie",
  "/blog/podlasie-z-psem",
  "/blog/kraina-otwartych-okiennic",
  "/blog/puszcza-knyszynska-przewodnik",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      vitePrerender({
        staticDir: path.join(__dirname, "dist"),
        routes: prerenderRoutes,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-popover', '@radix-ui/react-tooltip', '@radix-ui/react-tabs', '@radix-ui/react-select', '@radix-ui/react-dropdown-menu'],
          'vendor-utils': ['@tanstack/react-query', 'react-helmet-async', 'date-fns', 'clsx', 'tailwind-merge'],
          'vendor-icons': ['lucide-react'],
          'vendor-supabase': ['@supabase/supabase-js'],
        },
      },
    },
  },
}));