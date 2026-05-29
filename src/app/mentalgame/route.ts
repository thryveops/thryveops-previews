import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  const html = readFileSync(join(process.cwd(), 'public/mentalgame/index.html'), 'utf-8');
  const patched = html.replace('</head>', '<base href="/mentalgame/"></head>');
  return new Response(patched, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
