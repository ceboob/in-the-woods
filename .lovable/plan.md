

## Plan: Zmiana canonical na www.suprasl.online + aktualizacja sitemap + lista URL

### Problem
Obecnie wszystkie canonical tagi i sitemap używają `suprasl.online` (bez www), ale redirect chain kończy się na `https://www.suprasl.online`. Trzeba ujednolicić preferowaną wersję na `https://www.suprasl.online`.

### Zmiany

**1. SEOHead.tsx** — zmiana domeny bazowej
- Zmienić domyślny `ogImage` z `https://suprasl.online/` na `https://www.suprasl.online/`
- Canonical URLs przychodzą z komponentów — trzeba zmienić w źródłach

**2. SEOPageLayout.tsx** — zmiana generowania canonical
- Linia budująca canonical: zmienić `https://suprasl.online` na `https://www.suprasl.online`
- Breadcrumb schema: zmienić bazowy URL na `https://www.suprasl.online`

**3. BlogArticleLayout.tsx** — zmiana wszystkich hardcoded URL
- Article schema `url`, `mainEntityOfPage`, publisher `url`
- Breadcrumb schema items
- Wszystkie wystąpienia `https://suprasl.online` → `https://www.suprasl.online`

**4. Index.tsx** — zmiana canonical
- `canonical="https://suprasl.online/"` → `canonical="https://www.suprasl.online/"`

**5. public/sitemap.xml** — aktualizacja wszystkich 24 URL
- Zamienić `https://suprasl.online/` na `https://www.suprasl.online/` we wszystkich `<loc>`
- Zaktualizować `<lastmod>` na `2026-04-05`

**6. public/robots.txt** — aktualizacja sitemap URL
- Zmienić adres sitemapy na `https://www.suprasl.online/sitemap.xml`

**7. Lista URL do indeksowania** — wygenerować gotową listę 24 URL z prefiksem `https://www.suprasl.online/` do wklejenia w GSC

### Zakres zmian
- 6 plików do edycji
- Prosta zamiana ciągu `suprasl.online` → `www.suprasl.online` we wszystkich kontekstach SEO
- Po zatwierdzeniu: publikacja strony

