# Deploying thryveops-previews

Concept-preview mockups for Thryve Operations cold outreach.
Hosted at **preview.thryveops.com**, one route per lead.

## Local development

```bash
cd /Users/ethanaddo/localRepos/thryveops/thryveops-previews
npm run dev
```

Then open:
- http://localhost:3000 — index of all 10 previews
- http://localhost:3000/jamesjoyce — full James Joyce mockup
- http://localhost:3000/laterrazza, /salrosa, /frontporch, /coasis, /rollinmullet, /elevationcoffee, /thegoods, /hotwax, /retrohouse — placeholder pages (fill in as needed)

## First-time deploy to Vercel

1. **Create a GitHub repo** (private is fine) and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial preview scaffold + James Joyce mockup"
   gh repo create thryveops-previews --private --source=. --push
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com/new
   - Import the `thryveops-previews` repo
   - Framework preset auto-detects as Next.js
   - Click **Deploy** — no env vars needed
   - First build will give you a `thryveops-previews-xxx.vercel.app` URL

3. **Add the custom subdomain** (`preview.thryveops.com`):
   - In the Vercel project → **Settings → Domains** → add `preview.thryveops.com`
   - Vercel shows you the CNAME record to add at your DNS registrar
   - Typically: `CNAME  preview  cname.vercel-dns.com`
   - Add that record at the registrar where thryveops.com is registered
   - SSL provisions automatically within 1–2 minutes

4. **Verify**:
   - https://preview.thryveops.com → index page
   - https://preview.thryveops.com/jamesjoyce → live mockup

## Ongoing workflow

- Every `git push` to `main` auto-deploys to `preview.thryveops.com`
- Push to any branch → preview deploys on a per-branch URL (great for client review without overwriting prod)
- **Vercel Analytics** is already wired into `layout.tsx` — open events show up in the Vercel dashboard under Analytics. Use this to time follow-ups: if a prospect opens their preview, that's the signal to send the follow-up email.

## Adding a new lead

1. Create the route folder: `src/app/{slug}/page.tsx`
2. Either:
   - Use the `<ComingSoon>` template (see existing placeholder pages), or
   - Build a full mockup modeled on `/jamesjoyce/page.tsx`
3. Add the lead to the index in `src/app/page.tsx`
4. `git push` — Vercel deploys automatically.

## File map

```
src/
├── app/
│   ├── layout.tsx         ← fonts + Vercel Analytics
│   ├── globals.css        ← Tailwind 4 setup
│   ├── page.tsx           ← agency-branded index
│   ├── jamesjoyce/        ← full mockup (Tier 1 — pitch-ready)
│   ├── laterrazza/        ← placeholder
│   ├── salrosa/           ← placeholder
│   ├── frontporch/        ← placeholder
│   ├── coasis/            ← placeholder
│   ├── rollinmullet/      ← placeholder
│   ├── elevationcoffee/   ← placeholder
│   ├── thegoods/          ← placeholder
│   ├── hotwax/            ← placeholder
│   └── retrohouse/        ← placeholder
└── components/
    └── ComingSoon.tsx     ← shared placeholder template
```
