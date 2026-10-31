import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = path.join(projectRoot, 'dist');
const siteUrl = 'https://www.suprasl.online';
const propertyId = `${siteUrl}/#vacation-rental`;

function extractSchemas(html) {
  return [
    ...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
  ].map(([, json]) => JSON.parse(json));
}

function hasType(value, type) {
  if (!value || typeof value !== 'object') return false;
  const types = Array.isArray(value['@type']) ? value['@type'] : [value['@type']];
  return types.includes(type) || Object.values(value).some((item) => hasType(item, type));
}

async function getHtml(route) {
  const file =
    route === '/'
      ? path.join(distRoot, 'index.html')
      : path.join(distRoot, route.slice(1), 'index.html');
  return readFile(file, 'utf8');
}

async function listHtmlFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listHtmlFiles(entryPath)));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(entryPath);
  }
  return files;
}

const homeSchemas = extractSchemas(await getHtml('/'));
const vacationRentals = homeSchemas.filter((schema) => hasType(schema, 'VacationRental'));
assert.equal(vacationRentals.length, 1, 'Homepage must contain exactly one VacationRental');
const rental = vacationRentals[0];
assert.equal(rental.identifier, 'in-the-woods-suprasl');
assert.ok(
  Array.isArray(rental.image) && rental.image.length >= 8,
  'VacationRental needs 8+ images',
);
for (const image of rental.image) {
  assert.ok(image.startsWith(`${siteUrl}/`), `Image must be an absolute site URL: ${image}`);
  const imagePath = new URL(image).pathname;
  await stat(path.join(projectRoot, 'public', imagePath.slice(1)));
}
assert.equal(rental.latitude, 53.2075206);
assert.equal(rental.longitude, 23.4387928);
assert.deepEqual(rental.geo, {
  '@type': 'GeoCoordinates',
  latitude: 53.2075206,
  longitude: 23.4387928,
});
assert.equal(rental.containsPlace.additionalType, 'EntirePlace');
assert.ok(
  ['EntirePlace', 'PrivateRoom', 'SharedRoom'].includes(rental.containsPlace.additionalType),
);
assert.equal(rental.containsPlace.occupancy.value, 8);
assert.ok(Number.isInteger(rental.containsPlace.occupancy.value));
assert.ok(rental.description);
assert.equal(rental.url, `${siteUrl}/`);

const offerRoutes = [
  '/',
  '/puszcza-knyszynska-nocleg',
  '/dom',
  '/dom-w-lesie-suprasl',
  '/domek-suprasl',
  '/domek-z-jacuzzi-podlasie',
  '/noclegi-suprasl',
  '/weekend-suprasl',
  '/wieczor-panienski-suprasl',
  '/wieczor-kawalerski-suprasl',
  '/sylwester-podlasie',
  '/domek-z-psem-podlasie',
];
for (const route of offerRoutes.slice(1)) {
  const schemas = extractSchemas(await getHtml(route));
  assert.ok(
    schemas.some((schema) => schema.about?.['@id'] === propertyId),
    `${route} must reference the canonical property using @id`,
  );
}

const allHtmlFiles = await listHtmlFiles(distRoot);
for (const file of allHtmlFiles) {
  if (file === path.join(distRoot, 'index.html') || file === path.join(distRoot, '404.html'))
    continue;
  const html = await readFile(file, 'utf8');
  const schemas = extractSchemas(html);
  assert.ok(
    !schemas.some((schema) => hasType(schema, 'VacationRental')),
    `${file} contains VacationRental`,
  );
  if (!html.includes('content="noindex, follow"')) {
    assert.ok(
      schemas.some((schema) => hasType(schema, 'WebPage')),
      `${file} is missing WebPage schema`,
    );
  }
}

const blogSchemas = extractSchemas(await getHtml('/blog'));
assert.ok(blogSchemas.some((schema) => hasType(schema, 'Blog')));
assert.ok(blogSchemas.some((schema) => hasType(schema, 'CollectionPage')));
const articleSchemas = extractSchemas(await getHtml('/blog/puszcza-knyszynska-przewodnik'));
assert.ok(articleSchemas.some((schema) => hasType(schema, 'BlogPosting')));
assert.ok(
  extractSchemas(await getHtml('/informator')).some((schema) => hasType(schema, 'WebPage')),
);
assert.ok(
  extractSchemas(await getHtml('/atrakcje-suprasl')).some((schema) => hasType(schema, 'WebPage')),
);

console.log(`Structured data checks passed for ${allHtmlFiles.length} prerendered HTML files.`);
