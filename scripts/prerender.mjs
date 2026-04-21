import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = process.cwd();
const distDir = path.join(projectRoot, 'dist');
const ssrEntryPath = path.join(projectRoot, '.ssr', 'entry-server.js');

const { prerenderRoutes, render } = await import(pathToFileURL(ssrEntryPath).href);
const template = await readFile(path.join(distDir, 'index.html'), 'utf8');

function injectAttributes(html, tagName, attributes) {
  if (!attributes) return html;

  return html.replace(new RegExp(`<${tagName}([^>]*)>`), (_match, existing = '') => {
    const normalizedExisting = existing.trim();
    const combined = [normalizedExisting, attributes].filter(Boolean).join(' ');
    return `<${tagName}${combined ? ` ${combined}` : ''}>`;
  });
}

for (const route of prerenderRoutes) {
  const { appHtml, headTags, htmlAttributes, bodyAttributes } = await render(route);
  const titleMatch = headTags.match(/<title[^>]*>[\s\S]*?<\/title>/);
  const normalizedHeadTags = titleMatch ? headTags.replace(titleMatch[0], '') : headTags;

  let pageHtml = template
    .replace(/<title[^>]*>[\s\S]*?<\/title>/, titleMatch?.[0] ?? '<title>In The Woods</title>')
    .replace('<!--app-head-->', normalizedHeadTags)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  pageHtml = injectAttributes(pageHtml, 'html', htmlAttributes);
  pageHtml = injectAttributes(pageHtml, 'body', bodyAttributes);

  const outputPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.replace(/^\/+/, ''), 'index.html');

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, pageHtml);
}

await rm(path.join(projectRoot, '.ssr'), { recursive: true, force: true });
