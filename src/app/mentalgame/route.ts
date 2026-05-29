import { readFileSync } from 'fs';
import { join } from 'path';

const BASE = '/mentalgame/';

export async function GET() {
  let html = readFileSync(join(process.cwd(), 'public/mentalgame/index.html'), 'utf-8');
  // <base> fixes HTML attribute relative URLs (img src, a href, etc.)
  html = html.replace('</head>', `<base href="${BASE}"></head>`);
  // Chrome does not apply <base> to CSS url() in inline <style> blocks — rewrite them explicitly
  html = html.replace(/url\('(?!https?:|\/|data:)([^']+)'\)/g, `url('${BASE}$1')`);
  html = html.replace(/url\("(?!https?:|\/|data:)([^"]+)"\)/g, `url("${BASE}$1")`);
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
