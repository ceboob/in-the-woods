import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(__dirname, '../..');
const read = (file: string) => readFileSync(path.join(root, file), 'utf8');

const routeFile = read('src/routes/routeDefinitions.ts');
const routes = new Set([...routeFile.matchAll(/path:\s*'([^']+)'/g)].map((match) => match[1]));
const vercel = JSON.parse(read('vercel.json')) as {
  redirects: { source: string; destination: string; permanent?: boolean }[];
};
const pathRedirects = vercel.redirects.filter((redirect) => !redirect.source.includes('('));
const sitemap = read('public/sitemap.xml');

const listFiles = (dir: string): string[] =>
  readdirSync(path.join(root, dir)).flatMap((name) => {
    const relative = path.join(dir, name);
    return statSync(path.join(root, relative)).isDirectory() ? listFiles(relative) : [relative];
  });

const contentFiles = listFiles('src')
  .filter((file) => /\.(tsx|ts)$/.test(file))
  .filter((file) => !file.includes(`${path.sep}ui${path.sep}`) && !file.includes('test'));

const landingPages = [
  '/noclegi-suprasl',
  '/domek-suprasl',
  '/dom-w-lesie-suprasl',
  '/domek-z-jacuzzi-podlasie',
  '/puszcza-knyszynska-nocleg',
  '/weekend-suprasl',
  '/wieczor-panienski-suprasl',
  '/wieczor-kawalerski-suprasl',
  '/sylwester-podlasie',
  '/domek-z-psem-podlasie',
  '/atrakcje-suprasl',
];

describe('trasy i przekierowania', () => {
  it('każda strona ofertowa ma trasę i wpis w sitemap', () => {
    for (const page of landingPages) {
      expect(routes.has(page), page).toBe(true);
      expect(sitemap).toContain(`https://www.suprasl.online${page}</loc>`);
    }
  });

  it('przekierowania 301 prowadzą do istniejących tras', () => {
    for (const redirect of pathRedirects) {
      expect(redirect.permanent, redirect.source).toBe(true);
      expect(routes.has(redirect.destination), redirect.destination).toBe(true);
    }
  });

  it('źródło przekierowania nie jest już trasą ani wpisem w sitemap', () => {
    for (const redirect of pathRedirects) {
      expect(routes.has(redirect.source), redirect.source).toBe(false);
      expect(sitemap).not.toContain(`https://www.suprasl.online${redirect.source}</loc>`);
    }
  });

  it('linki wewnętrzne nie wskazują na przekierowane adresy', () => {
    const sources = pathRedirects.map((redirect) => redirect.source);
    for (const file of contentFiles) {
      const content = read(file);
      for (const source of sources) {
        expect(
          content.includes(`'${source}'`) || content.includes(`"${source}"`),
          `${file} → ${source}`,
        ).toBe(false);
      }
    }
  });
});

describe('reguły treści z audytu', () => {
  const banned = [
    /\bw Konne\b(?!m)/,
    /\[X km/,
    /funkcją jacuzzi/,
    /Hit gości/,
    /\bchill\b/i,
    /team building/i,
    /synonim prywatności/,
    /Perł[aęy] Podlasia/,
    /niepowtarzalny urok/,
    /Jeśli wpisujecie w wyszukiwarkę/,
    /lesie wynajem|odludziu wynajem/,
  ];

  it('w treściach nie ma zakazanych sformułowań', () => {
    for (const file of contentFiles) {
      const content = read(file).replace(/\u00a0|&nbsp;|\\u00a0/g, ' ');
      for (const pattern of banned) {
        expect(pattern.test(content), `${file}: ${pattern}`).toBe(false);
      }
    }
  });

  it('strony ofertowe mają title do 60 znaków i opis do 160 znaków', () => {
    const files = listFiles('src/pages').filter(
      (file) => /\.tsx$/.test(file) && !file.includes('blog'),
    );
    for (const file of files) {
      const content = read(file).replace(/\u00a0|&nbsp;|\\u00a0/g, ' ');
      const title = content.match(/\n\s*title="([^"]+)"/)?.[1];
      const description = content.match(/\n\s*description="([^"]+)"/)?.[1];
      if (title) expect(title.length, `${file} title`).toBeLessThanOrEqual(60);
      if (description) expect(description.length, `${file} description`).toBeLessThanOrEqual(160);
    }
  });
});
