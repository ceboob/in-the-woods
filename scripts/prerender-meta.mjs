/**
 * Build-time script: generates per-route HTML files with correct
 * <title>, <meta description>, <link canonical>, and <h1> in raw HTML.
 *
 * This solves "Canonical Only in Rendered HTML", "H1 Only in Rendered HTML",
 * "Meta Description Only in Rendered HTML", "Page Title Updated by JavaScript".
 *
 * Run AFTER `vite build` — it post-processes dist/index.html into per-route copies.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const BASE_URL = 'https://www.suprasl.online';

// Route → SEO metadata map (extracted from React page components)
const ROUTES = [
  { path: '/', title: 'Domek w lesie z jacuzzi | In The Woods — Podlasie', desc: 'Zarezerwuj leśny dom z sauną i balią w Puszczy Knyszyńskiej na wyłączność. Cisza, kominek, ogrodzony teren. Sprawdź wolne terminy!', h1: 'Leśny dom na wyłączność — domek w lesie z jacuzzi i sauną' },
  { path: '/noclegi-suprasl', title: 'Noclegi Supraśl — domek w lesie na wyłączność | 2026', desc: 'Zarezerwuj domek w lesie na wyłączność w Supraślu. Kominek, jacuzzi, ogrodzony teren, psy za darmo.', h1: 'Noclegi Supraśl — domek w lesie na wyłączność' },
  { path: '/dom-w-lesie-suprasl', title: 'Dom w lesie Podlasie | Domek na odludziu wynajem', desc: 'Domek w lesie na wyłączność na Podlasiu — kominek, jacuzzi, ogrodzony teren, psy za darmo. Leśny dom z bali w Puszczy Knyszyńskiej.', h1: 'Dom w lesie na wyłączność — domek na Podlasiu' },
  { path: '/weekend-suprasl', title: 'Weekend w Supraślu | Domek w lesie na weekend', desc: 'Zaplanuj weekend w domku w lesie z jacuzzi i kominkiem w Supraślu. Puszcza Knyszyńska, ruska bania, ognisko i slow travel.', h1: 'Weekend w Supraślu — plan na 2-3 dni w lesie' },
  { path: '/atrakcje-suprasl', title: 'Atrakcje Supraśla | Co zobaczyć i szlaki w Puszczy', desc: 'TOP atrakcje Supraśla — Monaster, Muzeum Ikon, szlaki Puszczy Knyszyńskiej, spływy kajakowe.', h1: 'Atrakcje Supraśla — co zobaczyć w Puszczy Knyszyńskiej' },
  { path: '/puszcza-knyszynska-nocleg', title: 'Nocleg w Puszczy Knyszyńskiej | Domek w lesie', desc: 'Domek w lesie na wyłączność w Puszczy Knyszyńskiej. Kominek, ruska bania z balią, ogrodzony teren, psy za darmo.', h1: 'Nocleg w Puszczy Knyszyńskiej — domek w lesie' },
  { path: '/domek-suprasl', title: 'Domek Supraśl — leśny domek do wynajęcia | In The Woods', desc: 'Domek Supraśl na wyłączność — kominek, jacuzzi, ogrodzony teren, psy za darmo. Dom z bali w Puszczy Knyszyńskiej.', h1: 'Domek Supraśl — leśny domek do wynajęcia' },
  { path: '/domek-z-jacuzzi-podlasie', title: 'Domek z jacuzzi w lesie | Balia i sauna Podlasie', desc: 'Domek z jacuzzi w lesie na Podlasiu — prywatna ruska bania z balią, kominek, dom na wyłączność w Puszczy Knyszyńskiej.', h1: 'Domek z jacuzzi w lesie — balia i sauna na Podlasiu' },
  { path: '/wieczor-panienski-suprasl', title: 'Wieczór panieński Supraśl | Domek w lesie', desc: 'Wieczór panieński w domku w lesie na wyłączność — jacuzzi, kominek, ognisko i ogrodzony teren w Puszczy Knyszyńskiej.', h1: 'Wieczór panieński Supraśl — impreza w domku w lesie' },
  { path: '/dom', title: 'Dom z bali na wyłączność | In The Woods Supraśl', desc: 'Dom z bali na wyłączność w Puszczy Knyszyńskiej — kominek, kuchnia z płytą kaflową, sypialnie z widokiem na las.', h1: 'Dom z bali na wyłączność — In The Woods Supraśl' },
  { path: '/galeria', title: 'Galeria zdjęć domku w lesie | In The Woods Supraśl', desc: 'Galeria zdjęć leśnego domku — salon z kominkiem, kuchnia, sypialnie, ogród, ruska bania w Puszczy Knyszyńskiej.', h1: 'Galeria zdjęć — In The Woods Supraśl' },
  { path: '/informator', title: 'Informator gościa | In The Woods Supraśl', desc: 'Praktyczny przewodnik dla gości In The Woods — zasady pobytu, dojazd, atrakcje i wskazówki.', h1: 'Informator gościa — In The Woods' },
  { path: '/dokumenty', title: 'Dokumenty i instrukcje | In The Woods', desc: 'Pobierz przewodnik po domu, umowę najmu i instrukcję obsługi In The Woods.', h1: 'Dokumenty i instrukcje — In The Woods' },
  { path: '/blog', title: 'Blog Supraśl – atrakcje i szlaki | In The Woods', desc: 'Blog o Supraślu — atrakcje, szlaki, historia i turystyka w Puszczy Knyszyńskiej. Przewodnik turystyczny.', h1: 'Blog — atrakcje i szlaki w Puszczy Knyszyńskiej' },
  { path: '/polityka-prywatnosci', title: 'Polityka prywatności | In The Woods', desc: 'Polityka prywatności i cookies serwisu In The Woods — informacje o przetwarzaniu danych osobowych.', h1: 'Polityka prywatności — In The Woods' },
  // Blog articles
  { path: '/blog/supraski-system-wodny', title: 'Supraski System Wodny – historia i atrakcje', desc: 'Historia Supraskiego Systemu Wodnego — kanały, młyny i atrakcje Supraśla. Spacer szlakiem wody.', h1: 'Supraski System Wodny — historia i atrakcje' },
  { path: '/blog/szlak-powstania-styczniowego-suprasl', title: 'Szlak Powstania Styczniowego Supraśl', desc: 'Szlak Powstania Styczniowego w Puszczy Knyszyńskiej — historia, pomniki i atrakcje Supraśla.', h1: 'Szlak Powstania Styczniowego — Supraśl' },
  { path: '/blog/suprasl-atrakcje-national-geographic', title: 'Supraśl — co zobaczyć | Atrakcje Podlasia', desc: 'Supraśl — jedno z najpiękniejszych miasteczek Podlasia. Co zobaczyć, szlaki i atrakcje.', h1: 'Supraśl — co zobaczyć na Podlasiu' },
  { path: '/blog/szlaki-piesze-rowerowe-suprasl', title: 'Szlaki Supraśl — piesze i rowerowe trasy', desc: 'Najlepsze szlaki piesze i rowerowe w okolicy Supraśla i Puszczy Knyszyńskiej.', h1: 'Szlaki piesze i rowerowe — Supraśl' },
  { path: '/blog/szlak-bioroznorodnosci-suprasl', title: 'Szlak Bioróżnorodności — Puszcza Knyszyńska', desc: 'Ścieżka edukacyjna Szlak Bioróżnorodności w Puszczy Knyszyńskiej koło Supraśla.', h1: 'Szlak Bioróżnorodności — Puszcza Knyszyńska' },
  { path: '/blog/kruszyniany-tatarska-wies', title: 'Kruszyniany – tatarska wieś Podlasia', desc: 'Kruszyniany — tatarska wieś na Podlasiu. Meczet, mizar, kuchnia tatarska i historia.', h1: 'Kruszyniany — tatarska wieś Podlasia' },
  { path: '/blog/suprasl-atrakcje-uzdrowisko', title: 'Supraśl – atrakcje uzdrowiska Podlasia', desc: 'Supraśl jako uzdrowisko — leczenie borowiną, SPA i atrakcje zdrowotne Podlasia.', h1: 'Supraśl — atrakcje uzdrowiska' },
  { path: '/blog/kajaki-suprasl', title: 'Spływ kajakowy rzeką Supraśl — atrakcje', desc: 'Spływ kajakowy rzeką Supraśl — trasy, wypożyczalnie i praktyczne porady.', h1: 'Spływ kajakowy rzeką Supraśl' },
  { path: '/blog/restauracje-suprasl', title: 'Restauracje Supraśl — gdzie zjeść na Podlasiu', desc: 'Najlepsze restauracje w Supraślu — kuchnia podlaska, kartacze, babka i regionalne smaki.', h1: 'Restauracje Supraśl — gdzie zjeść' },
  { path: '/blog/co-robic-suprasl', title: 'Co robić w Supraślu? Przewodnik po atrakcjach', desc: 'Kompletny przewodnik po atrakcjach Supraśla — co robić, co zobaczyć, gdzie się wybrać.', h1: 'Co robić w Supraślu — przewodnik po atrakcjach' },
  { path: '/blog/weekend-suprasl-plan', title: 'Weekend w Supraślu – plan na 2-3 dni', desc: 'Gotowy plan na weekend w Supraślu — atrakcje, restauracje, szlaki na 2-3 dni.', h1: 'Weekend w Supraślu — plan na 2-3 dni' },
  { path: '/blog/najlepsze-miejsca-puszcza-knyszynska', title: 'Najlepsze miejsca w Puszczy Knyszyńskiej', desc: 'Co warto zobaczyć w Puszczy Knyszyńskiej — najpiękniejsze miejsca, rezerwaty, szlaki.', h1: 'Najlepsze miejsca w Puszczy Knyszyńskiej' },
  { path: '/blog/puszcza-knyszynska-historie', title: 'Puszcza Knyszyńska — 7 niezwykłych opowieści', desc: 'Niezwykłe historie z Puszczy Knyszyńskiej — legendy, tradycje i ciekawostki.', h1: 'Puszcza Knyszyńska — historie i legendy' },
  { path: '/blog/wydarzenia-suprasl-2026', title: 'Wydarzenia Supraśl 2026 — imprezy i festiwale', desc: 'Kalendarium wydarzeń w Supraślu i okolicach na 2026 rok — festiwale, koncerty, jarmarki.', h1: 'Wydarzenia w Supraślu 2026' },
  { path: '/blog/aktywny-wypoczynek-suprasl', title: 'Aktywny wypoczynek Supraśl — 5 pomysłów', desc: 'Aktywny wypoczynek w Supraślu — rower, kajak, szlaki piesze, nordic walking w Puszczy Knyszyńskiej.', h1: 'Aktywny wypoczynek w Supraślu — 5 pomysłów' },
  { path: '/blog/uzdrowisko-spa-suprasl', title: 'Uzdrowisko Supraśl — borowina i SPA', desc: 'Uzdrowisko Supraśl — leczenie borowiną, zabiegi SPA i regeneracja w Puszczy Knyszyńskiej.', h1: 'Uzdrowisko Supraśl — borowina i SPA' },
  { path: '/blog/przewodnik-kulinarny-suprasl', title: 'Smaki Supraśla — kartacze i kuchnia podlaska', desc: 'Przewodnik kulinarny po Supraślu — gdzie zjeść kartacze, babkę ziemniaczaną i regionalne smaki.', h1: 'Smaki Supraśla — przewodnik kulinarny' },
  { path: '/blog/szlaki-puszcza-knyszynska', title: 'Szlaki Puszczy Knyszyńskiej — piesze i rowerowe', desc: 'Najlepsze szlaki Puszczy Knyszyńskiej z Supraśla — trasy piesze i rowerowe.', h1: 'Szlaki Puszczy Knyszyńskiej' },
  { path: '/blog/suprasl-na-weekend', title: 'Supraśl na weekend – plan zwiedzania na 2 dni', desc: 'Gotowy plan zwiedzania Supraśla na weekend — atrakcje, restauracje, szlaki.', h1: 'Supraśl na weekend — plan na 2 dni' },
  { path: '/blog/suprasl-z-dziecmi', title: 'Supraśl z dziećmi — atrakcje dla rodzin', desc: 'Co robić w Supraślu z dziećmi — atrakcje, place zabaw i pomysły na rodzinny weekend.', h1: 'Supraśl z dziećmi — atrakcje dla rodzin' },
  { path: '/blog/romantyczny-weekend-podlasie', title: 'Romantyczny weekend na Podlasiu — pomysły', desc: 'Pomysł na romantyczny weekend we dwoje na Podlasiu — domek w lesie, SPA, kolacja.', h1: 'Romantyczny weekend na Podlasiu' },
  { path: '/blog/cyfrowy-detoks-las', title: 'Cyfrowy detoks w lesie — reset od technologii', desc: 'Cyfrowy detoks w domku w lesie — jak odłączyć się od technologii i zregenerować siły.', h1: 'Cyfrowy detoks w lesie — reset od technologii' },
  { path: '/blog/grzybobranie-puszcza-knyszynska', title: 'Grzybobranie w Puszczy Knyszyńskiej', desc: 'Jesienne grzybobranie w Puszczy Knyszyńskiej — najlepsze miejsca, gatunki grzybów i porady.', h1: 'Grzybobranie w Puszczy Knyszyńskiej' },
  { path: '/blog/workation-podlasie', title: 'Workation na Podlasiu — praca zdalna w lesie', desc: 'Workation na Podlasiu — połącz pracę zdalną z odpoczynkiem w domku w Puszczy Knyszyńskiej.', h1: 'Workation na Podlasiu — praca zdalna w lesie' },
  { path: '/blog/podlasie-z-psem', title: 'Podlasie z psem — noclegi i atrakcje', desc: 'Podlasie z psem — gdzie szukać noclegu, atrakcje i porady na wyjazd z czworonogiem.', h1: 'Podlasie z psem — noclegi i atrakcje' },
  { path: '/blog/kraina-otwartych-okiennic', title: 'Kraina Otwartych Okiennic — podróż na Podlasiu', desc: 'Kraina Otwartych Okiennic — magiczna podróż w czasie po drewnianych wioskach Podlasia.', h1: 'Kraina Otwartych Okiennic — Podlasie' },
  { path: '/blog/puszcza-knyszynska-przewodnik', title: 'Puszcza Knyszyńska — kompletny przewodnik', desc: 'Kompletny przewodnik po Puszczy Knyszyńskiej — atrakcje, szlaki, mapy GPX i praktyczne porady.', h1: 'Puszcza Knyszyńska — kompletny przewodnik' },
];

// Read base HTML
const baseHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

let generated = 0;

for (const route of ROUTES) {
  const canonical = route.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${route.path}`;

  // Replace/inject meta in <head>
  let html = baseHtml;

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);

  // Inject meta description after <title>
  const metaDesc = `<meta name="description" content="${route.desc}" />`;
  const canonicalTag = `<link rel="canonical" href="${canonical}" />`;
  const robotsTag = `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`;

  // Remove existing canonical/description/robots if present
  html = html.replace(/<meta name="description"[^>]*\/?>/, '');
  html = html.replace(/<link rel="canonical"[^>]*\/?>/, '');
  html = html.replace(/<meta name="robots"[^>]*\/?>/, '');

  // Inject after <title>
  html = html.replace(
    /<\/title>/,
    `</title>\n    ${metaDesc}\n    ${canonicalTag}\n    ${robotsTag}`
  );

  // Inject a visible <h1> inside <noscript> if present, or before #root
  // This ensures crawlers see the H1 even without JS
  if (html.includes('<noscript>')) {
    html = html.replace(
      '<noscript>',
      `<noscript>\n      <h1>${route.h1}</h1>`
    );
  }

  // Determine output path
  if (route.path === '/') {
    fs.writeFileSync(path.join(DIST, 'index.html'), html);
  } else {
    const dir = path.join(DIST, route.path);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
  }
  generated++;
}

console.log(`✅ Pre-rendered SEO meta for ${generated} routes.`);
