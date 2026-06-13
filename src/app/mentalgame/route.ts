import { readFileSync } from 'fs';
import { join } from 'path';

const BASE = '/mentalgame/';
const ASSETS = ['logo.png', 'mental_game.svg', 'IMG_1835.jpeg', 'IMG_1836.jpeg', 'IMG_1839.jpeg', 'IMG_1841.jpeg', 'IMG_2268.jpeg', 'IMG_2269.jpeg', 'IMG_2272.jpeg', 'IMG_2276.jpeg', 'teezus.jpeg', 'nosaint.jpeg'];

export async function GET() {
  let html = readFileSync(join(process.cwd(), 'public/mentalgame/index.html'), 'utf-8');

  // Rewrite CSS url() references (Chrome ignores <base> for inline <style>)
  html = html.replace(/url\('(?!https?:|\/|data:)([^']+)'\)/g, `url('${BASE}$1')`);
  html = html.replace(/url\("(?!https?:|\/|data:)([^"]+)"\)/g, `url("${BASE}$1")`);

  // Rewrite JS playlist video paths (relative strings won't resolve correctly without trailing slash)
  html = html.replace(/'videos\//g, `'${BASE}videos/`);

  // Rewrite src="" and href="" attributes for known asset filenames
  for (const asset of ASSETS) {
    html = html.replaceAll(`src="${asset}"`, `src="${BASE}${asset}"`);
    html = html.replaceAll(`href="${asset}"`, `href="${BASE}${asset}"`);
  }

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
